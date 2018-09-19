
var orgchart = new getOrgChart(document.getElementById("chart"), {
    expandToLevel: null,
    color: "darkred",
    dataSource: [
        { id: 1, parentId: null, Name: "1" },
        { id: 2, parentId: 1, Name: "2" },
        { id: 3, parentId: 1, Name: "3" },
        { id: 4, parentId: 2, Name: "4" },
        { id: 5, parentId: 2, Name: "5" },
        { id: 6, parentId: 3, Name: "6" },
        { id: 7, parentId: 3, Name: "7" },
        { id: 8, parentId: 5, Name: "8" },
        { id: 9, parentId: 5, Name: "9" }]
});

document.getElementById("btnExportToImage").addEventListener("click", function () {
    orgchart.exportToImage();
});