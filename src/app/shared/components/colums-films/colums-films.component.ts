import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FilmesService } from 'src/app/core/services/filmes.service';

@Component({
  selector: 'app-colums-films',
  templateUrl: './colums-films.component.html',
  styleUrls: ['./colums-films.component.scss'],
})
export class ColumsFilmsComponent implements OnInit {
  constructor(private service: FilmesService, private modalService: NgbModal) {}

  filmes: any;
  filme: any;

  ngOnInit(): void {
    this.service.listarDados().subscribe((data) => {
      this.filmes = data;
    });
  }

  open(content: any, data: any) {
    this.modalService.open(content);
    this.filme = data;
  }
}
