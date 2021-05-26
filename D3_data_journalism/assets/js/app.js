// @TODO: YOUR CODE HERE!
var scatter = d3.select("#scatter");
var svg = d3.select("#scatter").append("svg").attr("height", 300).attr("width", 400).attr("class", "chart");

svg.append("g").attr("class", "xText");
var xText = d3.select(".xText");
xText.attr("transform", "translate"(200", "250")");
xText.append("text").attr("y", 0).attr("date-name", "poverty").attr("data-axis", "x").attr("class", "aText active x ").text("In Poverty (%)");
