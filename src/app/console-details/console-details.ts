import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ConsoleService, ConsoleLookup } from '../services/console-service';

@Component({
  selector: 'app-console-details',
  standalone: false,
  styleUrl: './console-details.css',
  templateUrl: './console-details.html',
})
export class ConsoleDetails implements OnInit {
  lookup$?: Observable<ConsoleLookup>;

  constructor(
    private route: ActivatedRoute,
    private consoleService: ConsoleService
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (!!idParam) {
      const id: number = parseInt(idParam);
      this.lookup$ = this.consoleService.getConsole(id);
    }
  }
}
