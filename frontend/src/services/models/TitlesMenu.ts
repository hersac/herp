export class TitlesMenu {
  name: string;
  route: string;
  subtitle: Object[];
  constructor(name: string, route: string, subtitle: Object[] = []){
    this.name = name;
    this.route = route;
    this.subtitle = subtitle;
  }

}
