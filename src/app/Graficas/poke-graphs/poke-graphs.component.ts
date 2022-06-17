import { Component, OnInit } from '@angular/core';
declare var google:any;

@Component({
  selector: 'app-poke-graphs',
  templateUrl: './poke-graphs.component.html',
  styleUrls: ['./poke-graphs.component.css']
})
export class PokeGraphsComponent implements OnInit {

  constructor() { }

    ngOnInit(): void {
      google.charts.load("current", {packages:['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ["Element", "Density", { role: "style" } ],
          ["Attack", 8.94, "color: #F34024"],
          ["Special", 10.49, "color: #A35CE9"],
          ["Defense", 19.30, "color: #55C974"],
          ["Speed", 21.45, "color:  #3D9BEE"]
        ]);

        var view = new google.visualization.DataView(data);
        view.setColumns([0, 1,
                        { calc: "stringify",
                          sourceColumn: 1,
                          type: "string",
                          role: "annotation" },
                        2]);

        var options = {
          Color:{color:"white"},
          backgroundColor: { fill:'transparent' },
          title: "",
          width: 320,
          height: 350,
          'chartArea': {'width': '100%', 'height': '80%'},
          bar: {groupWidth: "95%"},
          legend: { position: "none" },
          hAxis: {
            textStyle: {
                color: 'white'
            },
            titleTextStyle: {
                color: 'white'
            }
        },
        vAxis: {
            textStyle: {
                color: 'white'
            },
            titleTextStyle: {
                color: 'white'
            },
            gridlines: {
              color: 'transparent'
          }
        },
        };
        var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
        chart.draw(view, options);
    }
  }

}
