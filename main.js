document.addEventListener("DOMContentLoaded",()=>{
    const days = document.getElementById("days");
    const gps = document.getElementById("gps");
    const tag = document.getElementById("tag");
    const roadside = document.getElementById("roadside");
    const under25 = document.getElementById("under25");

    const output = document.getElementById("output");
    const estimate = document.getElementById("estimate")

    estimate.addEventListener("click", ()=>{
    const results = getRateData(Number(days.value), 
    gps.checked, 
    roadside.checked, 
    tag.checked, 
    under25.checked)

    output.innerHTML= getTextResults(results);
        });
});