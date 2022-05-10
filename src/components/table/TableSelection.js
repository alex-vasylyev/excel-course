export class TableSelection {
  static className = 'selected'
  constructor() {
    this.group = []
    this.current = null
  }

  // $el instanceof DOM === true
  select($el) {
    this.clear()
    this.group.push($el)
    $el.focus().addClass(TableSelection.className)
    this.current = $el
  }

  get selectedIds() {
    return this.group.map($el => $el.id())
  }

  clear() {
    this.group.forEach($el => $el.removeClass(TableSelection.className))
  }

  selectGroup($group = []) {
    this.clear()
    this.group = $group
    this.group.forEach($el => $el.addClass(TableSelection.className))
  }

  applyStyle(style) {
    this.group.forEach($el=>$el.css(style))
  }
}
