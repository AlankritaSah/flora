import { Component , OnInit} from '@angular/core';
import { Title,Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fauna-nation';

  constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
    this.metaService.addTag({ name: 'description', content: 'This is an article about Angular Meta service' });
  }
}
