function heronArea(a, b, c) {
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
  }
  
  console.log(heronArea(3, 4, 5)); 
  console.log(heronArea(3, 12, 5));  // this gives NaN because the sides do not form a valid triangle and (s-somthing) gives negative value
  