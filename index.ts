import { formatHex } from 'culori';


interface BaseColorProps {
    l : number
    c : number
    h:number
    mode : 'lch'
}


function adjustHue(val:number) {
    if (val < 0) val += Math.ceil(-val / 360) * 360;
  
    return val % 360;
  }
  
  function createScientificPalettes(baseColor :BaseColorProps) {
    const targetHueSteps = {
      analogous: [0, 30, 60],
      triadic: [0, 120, 240],
      tetradic: [0, 90, 180, 270],
      complementary: [0, 180],
      splitComplementary: [0, 150, 210]
    };
  
    const palettes = {};
  // pour chaque clé dans targetHue on veut autant de clé dans palette puis on veut que les clé sois chaque valeur du tableau 
    for (const type of Object.keys(targetHueSteps)) {
      palettes[type] = targetHueSteps[type].map((step:number) => ({
        l: baseColor.l,
        c: baseColor.c,
        h: adjustHue(baseColor.h + step),
        mode: "lch"
      }));
    }
  
    return palettes;
  }

  var pates = createScientificPalettes({ l: 50, c: 30, h: 0, mode: 'lch' });
  const triadic = pates['analogous'].map((color: number) => formatHex(color))
  console.log(triadic)
  console.log(triadic)
  console.log(triadic)