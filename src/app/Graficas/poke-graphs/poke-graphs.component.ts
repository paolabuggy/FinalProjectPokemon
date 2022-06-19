import { Component, OnInit } from '@angular/core';
import {FirestoreService } from '../../servicios/firestore.service';
declare var google:any;

@Component({
  selector: 'app-poke-graphs',
  templateUrl: './poke-graphs.component.html',
  styleUrls: ['./poke-graphs.component.css']
})
export class PokeGraphsComponent implements OnInit {
  tipo:boolean=true;
  public pokemones: any = [];

  constructor(private firestoreService: FirestoreService) { }
  
  
  CambiaGrafica(){
    google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ["Stat", "Points", { role: "style" } ],
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

    let options = {
        Color:{color:"white"},
        backgroundColor: { fill:'transparent' },
        title: "",
        width: 500,
        height: 200,
        'chartArea': {'width': '100%', 'height': '80%'},
        bar: {groupWidth: "75%"},
        legend: { position: "none" },
        hAxis: {
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
    var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
    chart.draw(view, options);
    }
  }


    ngOnInit(): void {
      this.firestoreService.getPokemones().subscribe((pokemonesSnapshot) => {
        this.pokemones = [];
        pokemonesSnapshot.forEach((pokemonData: any) => {
          this.pokemones.push({
            id: pokemonData.payload.doc.id,
            data: pokemonData.payload.doc.data()
          });
        });
      });

      //Grafica vertical
      
     var tipografica=this.tipo;
      google.charts.load("current", {packages:['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        
          var data = google.visualization.arrayToDataTable([
            ["Stat", "Points", { role: "style" } ],
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
            width: 300,
            height: 350,
            'chartArea': {'width': '100%', 'height': '80%'},
            bar: {groupWidth: "85%"},
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
    this.CambiaGrafica();
  }

  Cambio(){
    var us:any;
    if(this.tipo==true){
      us=document.getElementById("columnchart_values");
      if (us.style.display === "none") {
        us.style.display = "block";
      } else {
        us.style.display = "none";
      }
      this.tipo=false;
    }
    else{
      this.tipo=true;
    }
  }

  
}
