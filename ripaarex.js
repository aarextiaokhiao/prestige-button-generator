function randomChoice(array)
{
  return array[Math.floor(Math.random() * array.length)]
}

function HSVtoRGB(h, s, v) {
  var r, g, b, i, f, p, q, t;
  if (arguments.length === 1) {
      s = h.s, v = h.v, h = h.h;
  }
  i = Math.floor(h * 6);
  f = h * 6 - i;
  p = v * (1 - s);
  q = v * (1 - f * s);
  t = v * (1 - (1 - f) * s);
  switch (i % 6) {
      case 0: r = v, g = t, b = p; break;
      case 1: r = q, g = v, b = p; break;
      case 2: r = p, g = v, b = t; break;
      case 3: r = p, g = q, b = v; break;
      case 4: r = t, g = p, b = v; break;
      case 5: r = v, g = p, b = q; break;
  }
  return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255)
  };
}

function HSVtoHex(h, s, v)
{
  rgb = HSVtoRGB(h, s, v)

  hexList = [rgb.r.toString(16), rgb.g.toString(16), rgb.b.toString(16)]
  for (i = 0; i < hexList.length; i++)
  {
    if (hexList[i].length == 1) {hexList[i] = "0" + hexList[i]}
  }
  return "#" + hexList[0] + hexList[1] + hexList[2]
}

function HSVAtoRGBA(h, s, v, a)
{
  rgb = HSVtoRGB(h, s, v)
  return "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + "," + a + ")"
}

function generatePrestigeButton()
{
  let firstConsonants = ['B', 'C', 'D', 'F', 'G', 'H', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'V', 'W', 'Z', 'Ch', 'Sh', 'Th', 'Bl',
    'Sp', 'Tr', 'Cl', 'Sc', 'Fr']
  let secondConsonants = ['b', 'c', 'd', 'f', 'g', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'z', 'ch', 'sh', 'th']
  let thirdConsonants = ['b', 'c', 'd', 'f', 'g', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'z', 'ch', 'sh', 'th',
    'ct', 'rn']
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let endings = ['ize', 'ify', 'ity']
  let prestigeName = randomChoice(firstConsonants) + randomChoice(vowels) + randomChoice(secondConsonants) +
    randomChoice(vowels) + randomChoice(thirdConsonants) + randomChoice(endings)

  document.getElementById("ripaarex").innerHTML = prestigeName;

  let colorTheme = Math.random()
  let hasGradient = Math.random() <= 0.3 ? true : false
  let isDark = Math.random() <= 0.5 ? true : false

  if (!hasGradient)
  {
    document.getElementById("ripaarex").style.background = HSVtoHex(colorTheme, isDark ? 1 : 0.5, isDark ? 0.5 : 1);
    document.getElementById("ripaarex").style.color = isDark ? HSVtoHex(colorTheme, 1, 1) : "#000000"

    if (Math.random() <= 0.5)
    {
      document.getElementById("ripaarex").style["text-shadow"] = "0px 0px 6px " + (isDark ? "#000000" : "#FFFFFF");
    }
    else
    {
      document.getElementById("ripaarex").style["text-shadow"] = "";
    }
    document.getElementById("ripaarex").style.borderColor = isDark ? HSVtoHex(colorTheme, 1, 1) : "#000000"
  }
  else
  {
    // There are several different gradient types
    // 0: Vertical gradient (hue-shift)
    // 1: Vertical gradient (brightness-shift)
    // 2: Circular gradient (brightness-shift)
    gradientType = Math.floor(Math.random() * 3)
    if (gradientType == 0)
    {
      shiftedColor = (colorTheme + (Math.random() > 0.8 ? 0.2 : 0.1)) % 1
      document.getElementById("ripaarex").style.background = "linear-gradient(" +
        HSVtoHex(colorTheme, isDark ? 1 : 0.5, isDark ? 0.5 : 1) + ", " + HSVtoHex(shiftedColor, isDark ? 1 : 0.5, isDark ? 0.5 : 1)
    }
    else if (gradientType == 1 || gradientType == 2)
    {
      document.getElementById("ripaarex").style.background = (gradientType == 1 ? "linear-gradient(" : "radial-gradient(") +
        HSVtoHex(colorTheme, isDark ? 1 : 0.5, isDark ? 0.5 : 1) + ", " + HSVtoHex(colorTheme, isDark ? 1 : 0.3, isDark ? 0.5 : 0.7)
    }

    if (isDark)
      {
        document.getElementById("ripaarex").style.color = gradientType == 0 ? "#FFFFFF" : HSVtoHex(colorTheme, 1, 1)
        document.getElementById("ripaarex").style["text-shadow"] = "0px 0px 6px " + HSVtoHex(colorTheme, 1, 1);
        document.getElementById("ripaarex").style.borderColor = HSVtoHex(colorTheme, 1, 1);
      }
    else
      {
        document.getElementById("ripaarex").style.color = "#000000"
        document.getElementById("ripaarex").style["text-shadow"] = "";
        document.getElementById("ripaarex").style.borderColor = "#000000";
      }
  }

  document.getElementById("ripaarex").style.display = "inline-block"
  document.getElementById("ripaarex").id = ""
  document.getElementById("prestiges").innerHTML += " <button class=\"tabbtn\" id=\"ripaarex\" style=\"font-family: MonospaceTypewriter; font-size: 20px; display: none;\">Dimensions</button>"
}