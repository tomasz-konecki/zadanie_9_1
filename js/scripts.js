var base = prompt("Podaj długość podstawy (a):"),
    height = prompt("Podaj wysokość (h):"),
    triangle0Area = getTriangleArea(base, height),
    triangle1Area = getTriangleArea(10, 15),
    triangle2Area = getTriangleArea(12, 24),
    triangle3Area = getTriangleArea(16, 32);

document.getElementById("result0").innerHTML = triangle0Area;
document.getElementById("result1").innerHTML = triangle1Area;
document.getElementById("result2").innerHTML = triangle2Area;
document.getElementById("result3").innerHTML = triangle3Area;

function getTriangleArea(a, h) {
    if (a <= 0 || h <= 0) {
        return "nieprawidłowe dane";
    } else {
        return a*h/2;
    }
};
