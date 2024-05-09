var audioCtx = new (window.AudioContext || window.webkitAudioContext || window.audioContext);
let sheet = [];
let song = 0;
let evaluated = false;
let evalStr = "";
function GenerateJSClick () {		
    sheet = [];
    evaluated = false;
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    console.log('CODE: ', code)
    eval(code);
    console.log(sheet);
    evalStr = "";
    Play(0);
    return false;
}

function Play(n)
{
    let bpm = tasks[song].bpm;
    let note = sheet[n];
    if (n == sheet.length && !evaluated)
    {
        Eval();
    }
    else if (n < sheet.length)
    {
        evalStr = evalStr + ("{tone: " + note.tone + ", time: " + note.time + "},\n");
        let dur = (60000/(bpm/4))*note.time;
        console.log(n + " " + dur);
        let freq = 440*Math.pow(2, (note.tone-69)/12);
        PlayTone(dur, freq);

        setTimeout(Play, dur, n+1);
    }
    else return;
}

function Sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

function Eval()
{
    evaluated = true;
    console.log(evalStr);
    if (sheet.length != tasks[song].solution.length)
    {
        alert("Incorrect!");
        return;
    }
    else
    {
        for (let i = 0; i < sheet.length; i++)
        {
            if (sheet[i].tone != tasks[song].solution[i].tone || sheet[i].time != tasks[song].solution[i].time)
            {
                alert("Incorrect!");
                return;
            }
        }

        alert("Correct!");
        return;
    }
}

function PlayTone(duration, frequency) {
    var oscillator = audioCtx.createOscillator();
    var gainNode = audioCtx.createGain();
  
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
  
    gainNode.gain.value = 0.8;
    oscillator.frequency.value = frequency;
    oscillator.type = "sine";
  
    oscillator.start();
  
    setTimeout(
      function() {
        oscillator.stop();
      },
      duration
    );
  };

function GenerateTaskClick()
{
    song = Math.floor(Math.random() * (tasks.length));
    document.getElementById("task").innerHTML = "<img src='" + tasks[song].img + "' alt='sheet' style='margin: auto;'>";
}