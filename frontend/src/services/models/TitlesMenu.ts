export class TitlesMenu {
  name: String;
  route: String;
  subtitle: Object[];
  constructor(name: String, route: String, subtitle: Object[] = []){
    this.name = name;
    this.route = route;
    this.subtitle = subtitle;
  }

}
