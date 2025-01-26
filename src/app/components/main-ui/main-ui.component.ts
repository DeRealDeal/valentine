import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-ui',
  imports: [NgOptimizedImage],
  templateUrl: './main-ui.component.html',
  styleUrl: './main-ui.component.scss',
})
export class MainUiComponent implements OnInit {
  constructor(readonly router: Router) {}
  imageUrls = [
    'assets/images/question.png',
    'assets/images/sad.png',
    'assets/images/angry.png',
    'assets/images/angry2.png',
    'assets/images/sad2.png',
  ];
  nos = 0;
  imageSrc = this.imageUrls[0];
  ngOnInit(): void {
    let b: any;
    b = document.querySelector('#changing');
    const x = b?.getBoundingClientRect().left;
  }
  change(b: HTMLElement) {
    this.nos++;
    if (this.nos === 3) {
      this.imageSrc = this.imageUrls[1];
    }
    if (this.nos === 5) {
      this.imageSrc = this.imageUrls[2];
    }
    if (this.nos === 7) {
      this.imageSrc = this.imageUrls[3];
    }
    if (this.nos === 10) {
      this.imageSrc = this.imageUrls[4];
    }
    if (this.nos > 10) {
      b.style.display = 'none';
      return;
    }
    const x =
      Math.floor(Math.random() * window.innerWidth) - window.innerWidth / 2;
    const y =
      Math.floor(Math.random() * window.innerHeight) - window.innerHeight / 2;
    b.style.left = x - 60 + 'px';
    b.style.top = y - 150 + 'px';
  }

  yes() {
    this.router.navigate(['yes']);
  }
}
