import { Component, inject } from '@angular/core';
import { MatIcon } from "@angular/material/icon"
import { MatButton } from "@angular/material/button"
import { MatBadge } from "@angular/material/badge"
import { RouterLink, RouterModule } from "@angular/router";
import { BusyService } from '../../core/services/busy.service';
import { MatProgressBar } from '@angular/material/progress-bar'

@Component({
  selector: 'app-header',
  imports: [
    MatIcon,
    MatButton,
    MatBadge,
    RouterLink,
    RouterModule,
    MatProgressBar 
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  busyService = inject(BusyService)
}
