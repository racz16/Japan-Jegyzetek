import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

interface MenuGroup {
  name: string;
  items: Array<MenuItem>;
}

interface MenuItem {
  name: string;
  path: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit {
  menu: Array<MenuGroup> = [
    {
      name: 'Írás és olvasás',
      items: [
        { name: 'Áttekintés', path: '#' },
        { name: 'Kanji', path: '#' },
        { name: 'Hiragana', path: '#' },
        { name: 'Katakana', path: '#' },
        { name: 'Romaji', path: '#' },
      ],
    },
    {
      name: 'Partikulák',
      items: [
        { name: 'が', path: '#' },
        { name: 'か', path: '#' },
        { name: 'ね', path: '#' },
        { name: 'の', path: '#' },
        { name: 'と', path: '#' },
        { name: 'や', path: '#' },
        { name: 'よ', path: '#' },
        { name: 'に', path: '#' },
        { name: 'を', path: '#' },
        { name: 'も', path: '#' },
        { name: 'な', path: '#' },
      ],
    },
    {
      name: 'Szófajok',
      items: [
        { name: 'Igék', path: '#' },
        { name: 'Melléknevek', path: '#' },
        { name: 'Határozószavak', path: '#' },
      ],
    },
    {
      name: 'Egyéb',
      items: [
        { name: 'Számlálók', path: '#' },
        { name: 'Példamondatok', path: '#' },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

