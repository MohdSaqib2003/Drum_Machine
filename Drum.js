 var array_audio=[new Audio("sounds/mixkit-tribal-dry-drum-558.wav"),
        new Audio("sounds/mixkit-achievement-win-drums-555.wav"),
        new Audio("sounds/mixkit-ominous-drums-227.wav"),
        new Audio("sounds/mixkit-deep-cinematic-subtle-drum-impact-549.wav"),
        new Audio("sounds/mixkit-deep-dark-horror-drum-557.wav"),
        new Audio("sounds/mixkit-deep-horror-drum-556.wav"),
        new Audio("sounds/mixkit-drum-and-percussion-545.wav"),
        new Audio("sounds/mixkit-drum-hit-with-eco-544.wav"),
        new Audio("sounds/mixkit-horror-tunnel-drum-554.wav"),
        new Audio("sounds/mixkit-metal-hit-drum-sound-550.wav"),

        new Audio("sounds/mixkit-bad-joke-drums-2893.wav"),
        new Audio("sounds/mixkit-drum-bass-hit-2294.wav"),
        new Audio("sounds/mixkit-hand-tribal-drum-562.wav"),
        new Audio("sounds/mixkit-joke-drums-578.wav"),
        new Audio("sounds/mixkit-short-bass-hit-2299.wav"),
        new Audio("sounds/mixkit-guitar-string-tone-2326.wav"),
        new Audio("sounds/mixkit-nylon-guitar-single-note-2332.wav"),
        new Audio("sounds/mixkit-record-player-needle-drop-on-vinyl-701.wav"),
        new Audio("sounds/mixkit-western-guitar-drum-single-2333.wav"),

        new Audio("sounds/mixkit-metallic-cinematic-drum-trailer-sound-551.wav"),
        new Audio("sounds/mixkit-ominous-drums-227.wav"),
        new Audio("sounds/mixkit-ominous-drums-appear-228.wav"),
        new Audio("sounds/mixkit-tribal-dry-drum-558.wav"),
        new Audio("sounds/mixkit-drum-hit-with-eco-544.wav"),
        new Audio("sounds/mixkit-deep-horror-drum-556.wav"),
        new Audio("sounds/mixkit-drum-bass-hit-2294.wav")
    ]
   
   var btn = document.getElementsByTagName('button');
   function setAttribute(){     
    var i;
    for(i = 0;i<26;i++){
        let k = i;
        btn[k].addEventListener('click',()=>{array_audio[k].play();});

    }
   }
   setAttribute();
    // var audio1 = new Audio("mixkit-tribal-dry-drum-558.wav");
    // var audio2 = new Audio("mixkit-achievement-win-drums-555.wav");
    // var audio3 = new Audio("mixkit-cinematic-mystery-trailer-drum-hit-546.wav");
    // var audio4 = new Audio("mixkit-deep-cinematic-subtle-drum-impact-549.wav");
    // var audio5 = new Audio("mixkit-deep-dark-horror-drum-557.wav");
 

   window.addEventListener('keyup',(e)=>{
       switch(e.keyCode){
        //  for top row
            case 81:  // q
                array_audio[0].play();
                setTimeout(()=>{
                    btn[0].style.backgroundColor = '#E5E5E5';
                    btn[0].style.outline = 'none';
                    btn[0].style.border = 'none';
                    btn[0].style.borderRadius = 2+'px';
                },90)
                btn[0].style.backgroundColor = 'rgb(226, 165, 108)';
                break;
            case 87:  //w
                array_audio[1].play();
                setTimeout(()=>{
                    btn[1].style.backgroundColor = '#E5E5E5';
                    btn[1].style.outline = 'none';
                    btn[1].style.border = 'none';
                    btn[1].style.borderRadius = 2+'px';
                },90)
                btn[1].style.backgroundColor = 'rgb(226, 165, 108)';
                break;
            case 69:  //e
                array_audio[2].play();
                setTimeout(()=>{
                    btn[2].style.backgroundColor = '#E5E5E5';
                    btn[2].style.outline = 'none';
                    btn[2].style.border = 'none';
                    btn[2].style.borderRadius = 2+'px';
                },90)
                btn[2].style.backgroundColor = 'rgb(226, 165, 108)';
                break;
            case 82:   //r
                array_audio[3].play();
                setTimeout(()=>{
                    btn[3].style.backgroundColor = '#E5E5E5';
                    btn[3].style.outline = 'none';
                    btn[3].style.border = 'none';
                    btn[3].style.borderRadius = 2+'px';
                },90)
                btn[3].style.backgroundColor = 'rgb(226, 165, 108)';
                break;
            case 84:   //t
                array_audio[4].play();
                setTimeout(()=>{
                    btn[4].style.backgroundColor = '#E5E5E5';
                    btn[4].style.outline = 'none';
                    btn[4].style.border = 'none';
                    btn[4].style.borderRadius = 2+'px';
                },90)
                btn[4].style.backgroundColor = 'rgb(226, 165, 108)';
                break;
            case 89:   //y
                array_audio[5].play();
                setTimeout(()=>{
                    btn[5].style.backgroundColor = '#E5E5E5';
                    btn[5].style.outline = 'none';
                    btn[5].style.border = 'none';
                    btn[5].style.borderRadius = 2+'px';
                },90)
                btn[5].style.backgroundColor = 'rgb(226, 165, 108)';
                break;
            case 85:   //u
                array_audio[6].play();
                setTimeout(()=>{
                    btn[6].style.backgroundColor = '#E5E5E5';
                    btn[6].style.outline = 'none';
                    btn[6].style.border = 'none';
                    btn[6].style.borderRadius = 2+'px';
                },90)
                btn[6].style.backgroundColor = 'rgb(226, 165, 108)';
                break;
            case 73:   //i
                array_audio[7].play();
                setTimeout(()=>{
                    btn[7].style.backgroundColor = '#E5E5E5';
                    btn[7].style.outline = 'none';
                    btn[7].style.border = 'none';
                    btn[7].style.borderRadius = 2+'px';
                },90)
                btn[7].style.backgroundColor = 'rgb(226, 165, 108)';
                break;
            case 79:   //o
                array_audio[8].play();
                setTimeout(()=>{
                    btn[8].style.backgroundColor = '#E5E5E5';
                    btn[8].style.outline = 'none';
                    btn[8].style.border = 'none';
                    btn[8].style.borderRadius = 2+'px';
                },90)
                btn[8].style.backgroundColor = 'rgb(226, 165, 108)';
                break;
            case 80:   //p
                array_audio[9].play();
                setTimeout(()=>{
                    btn[9].style.backgroundColor = '#E5E5E5';
                    btn[9].style.outline = 'none';
                    btn[9].style.border = 'none';
                    btn[9].style.borderRadius = 2+'px';
                },90)
                btn[9].style.backgroundColor = 'rgb(226, 165, 108)';
                break;
            

            // for mid row    
            case 65:   //a
                array_audio[10].play();
                setTimeout(()=>{
                    btn[10].style.backgroundColor = '#E5E5E5';
                    btn[10].style.outline = 'none';
                    btn[10].style.border = 'none';
                    btn[10].style.borderRadius = 2+'px';
                },90)
                btn[10].style.backgroundColor = 'rgb(226, 165, 108)';
                break;
            case 83:   //s
                array_audio[11].play();
                setTimeout(()=>{
                    btn[11].style.backgroundColor = '#E5E5E5';
                    btn[11].style.outline = 'none';
                    btn[11].style.border = 'none';
                    btn[11].style.borderRadius = 2+'px';
                },90)
                btn[11].style.backgroundColor = 'rgb(226, 165, 108)';
                break;
            case 68:   //d
                array_audio[12].play();
                setTimeout(()=>{
                    btn[12].style.backgroundColor = '#E5E5E5';
                    btn[12].style.outline = 'none';
                    btn[12].style.border = 'none';
                    btn[12].style.borderRadius = 2+'px';
                },90)
                btn[12].style.backgroundColor = 'rgb(226, 165, 108)';
                break;
            case 70:   //f
                array_audio[13].play();
                setTimeout(()=>{
                    btn[13].style.backgroundColor = '#E5E5E5';
                    btn[13].style.outline = 'none';
                    btn[13].style.border = 'none';
                    btn[13].style.borderRadius = 2+'px';
                },90)
                btn[13].style.backgroundColor = 'rgb(226, 165, 108)';
                break;
            case 71:   //g
                array_audio[14].play();
                setTimeout(()=>{
                    btn[14].style.backgroundColor = '#E5E5E5';
                    btn[14].style.outline = 'none';
                    btn[14].style.border = 'none';
                    btn[14].style.borderRadius = 2+'px';
                },90)
                btn[14].style.backgroundColor = 'rgb(226, 165, 108)';
                break;
            case 72:   //h
                array_audio[15].play();
                setTimeout(()=>{
                    btn[15].style.backgroundColor = '#E5E5E5';
                    btn[15].style.outline = 'none';
                    btn[15].style.border = 'none';
                    btn[15].style.borderRadius = 2+'px';
                },90)
                btn[15].style.backgroundColor = 'rgb(226, 165, 108)';
                break;
            case 74:   //j
                array_audio[16].play();
                setTimeout(()=>{
                    btn[16].style.backgroundColor = '#E5E5E5';
                    btn[16].style.outline = 'none';
                    btn[16].style.border = 'none';
                    btn[16].style.borderRadius = 2+'px';
                },90)
                btn[16].style.backgroundColor = 'rgb(226, 165, 108)';
                break;
            case 75:   //k
                array_audio[17].play();
                setTimeout(()=>{
                    btn[17].style.backgroundColor = '#E5E5E5';
                    btn[17].style.outline = 'none';
                    btn[17].style.border = 'none';
                    btn[17].style.borderRadius = 2+'px';
                },90)
                btn[17].style.backgroundColor = 'rgb(226, 165, 108)';
                break;
            case 76:   //l
                array_audio[18].play();
                setTimeout(()=>{
                    btn[18].style.backgroundColor = '#E5E5E5';
                    btn[18].style.outline = 'none';
                    btn[18].style.border = 'none';
                    btn[18].style.borderRadius = 2+'px';
                },90)
                btn[18].style.backgroundColor = 'rgb(226, 165, 108)';
                break;


            // for bottom row    
            case 90:   //z
                array_audio[19].play();
                setTimeout(()=>{
                    btn[19].style.backgroundColor = '#E5E5E5';
                    btn[19].style.outline = 'none';
                    btn[19].style.border = 'none';
                    btn[19].style.borderRadius = 2+'px';
                },90)
                btn[19].style.backgroundColor = 'rgb(226, 165, 108)';
                break;
            case 88:   //x
                array_audio[20].play();
                setTimeout(()=>{
                    btn[20].style.backgroundColor = '#E5E5E5';
                    btn[20].style.outline = 'none';
                    btn[20].style.border = 'none';
                    btn[20].style.borderRadius = 2+'px';
                },90)
                btn[20].style.backgroundColor = 'rgb(226, 165, 108)';
                break;
            case 67:   //c
                array_audio[21].play();
                setTimeout(()=>{
                    btn[21].style.backgroundColor = '#E5E5E5';
                    btn[21].style.outline = 'none';
                    btn[21].style.border = 'none';
                    btn[21].style.borderRadius = 2+'px';
                },90)
                btn[21].style.backgroundColor = 'rgb(226, 165, 108)';
                break;
            case 86:   //v
                array_audio[22].play();
                setTimeout(()=>{
                    btn[22].style.backgroundColor = '#E5E5E5';
                    btn[22].style.outline = 'none';
                    btn[22].style.border = 'none';
                    btn[22].style.borderRadius = 2+'px';
                },90)
                btn[22].style.backgroundColor = 'rgb(226, 165, 108)';
                break;
            case 66:   //b
                array_audio[23].play();
                setTimeout(()=>{
                    btn[23].style.backgroundColor = '#E5E5E5';
                    btn[23].style.outline = 'none';
                    btn[23].style.border = 'none';
                    btn[23].style.borderRadius = 2+'px';
                },90)
                btn[23].style.backgroundColor = 'rgb(226, 165, 108)';
                break;
            case 78:   //n
                array_audio[24].play();
                setTimeout(()=>{
                    btn[24].style.backgroundColor = '#E5E5E5';
                    btn[24].style.outline = 'none';
                    btn[24].style.border = 'none';
                    btn[24].style.borderRadius = 2+'px';
                },90)
                btn[24].style.backgroundColor = 'rgb(226, 165, 108)';
                break;
            case 77:   //m
                array_audio[25].play();
                setTimeout(()=>{
                    btn[25].style.backgroundColor = '#E5E5E5';
                    btn[25].style.outline = 'none';
                    btn[25].style.border = 'none';
                    btn[25].style.borderRadius = 2+'px';
                },90)
                btn[25].style.backgroundColor = 'rgb(226, 165, 108)';
                break;

       }
   })
    
