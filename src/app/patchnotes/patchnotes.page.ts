import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-patchnotes',
  templateUrl: './patchnotes.page.html',
  styleUrls: ['./patchnotes.page.scss'],
})
export class PatchnotesPage implements OnInit {

  public commits: any;

  constructor(private httpClient: HttpClient) { }

  async ngOnInit() {
    const commits = await this.httpClient.get('https://api.github.com/repos/nubialyaktoled/XoCalote/commits').toPromise();
    this.commits = commits;
  }
}