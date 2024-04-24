import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  ngOnInit(): void {
    $(document).ready(function () {
      $('.owl-carousel').owlCarousel();
    });

    $(document).ready(function () {
      $('.fancybox').fancybox();
    });
  }
}
