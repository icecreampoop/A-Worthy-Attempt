import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';

import { EngineComponent } from './engine/engine.component';
import { UiComponent } from './ui/ui.component';
import { StatsComponent } from "./components/stats/stats.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [
        EngineComponent,
        UiComponent,
        StatsComponent,
        CommonModule
    ]
})
export class AppComponent implements AfterViewInit{
    statsCheckVisible: boolean = false;

    //last teeny gotcha as im manually adding it to dom so angular cant detect change
    //need manual detect change
    constructor(private cdr: ChangeDetectorRef) {}

    //couldnt fucking get (keydown) to work
    ngAfterViewInit(): void {
        document.addEventListener("keydown", this.onKeydown.bind(this), false);
    }

    onKeydown(event: KeyboardEvent) {
        if (event.key === 'l' || event.key === 'L') {
            this.statsCheckVisible = !this.statsCheckVisible;
            this.cdr.detectChanges();
        }
    }
}
