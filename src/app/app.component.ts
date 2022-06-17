import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      
      <span style="display: block"> Welcome to  {{ pokemonList[0] }} !</span>
      
  `
})
export class AppComponent implements OnInit {
    
  pokemonList = ['bulbizarre' , 'Salameche' , 'Carapuce'];

  ngOninit () {
    console.table(this.pokemonList);
  }
}
