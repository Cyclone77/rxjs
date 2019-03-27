import { Component, OnInit } from '@angular/core';
import { ConfigService, Config } from './config.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-config',
  templateUrl: './config.component.html'
})
export class ConfigComponent implements OnInit {

  private searchText$ = new Subject<string>();
  heroes: [];
  config: Config;
  constructor(
    private configService: ConfigService
  ) { }

  ngOnInit() {
    this.searchText$.pipe(
      debounceTime(500),
      distinctUntilChanged()
    );

    this.showHeroes();
  }

  showConfig() {
    this.configService.getConfig()
      .subscribe((data: Config) => this.config = { ... data });
  }

  showConfigResponse() {
    this.configService.getConfigResponse()
      // resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        // display its headers
        const keys = resp.headers.keys();
        // this.headers = keys.map(key =>
        //   `${key}: ${resp.headers.get(key)}`);

        // access the body directly, which is typed as `Config`.
        this.config = { ... resp.body };
      });
  }

  showHeroes() {
    this.configService.getHeroes()
      .subscribe(data => {
        this.heroes = data;
        // console.dir(this.heroes);
      });
  }
}
