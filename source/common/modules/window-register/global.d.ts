interface CheckboxRadioItem {
  id: string
  label: string
  accelerator?: string
  type: 'checkbox'|'radio'
  enabled: boolean
  checked: boolean
}

interface SeparatorItem {
  type: 'separator'
}

interface SubmenuItem {
  id: string
  label: string
  type: 'submenu'
  enabled: boolean
  submenu: Array<CheckboxRadioItem|SeparatorItem|SubmenuItem|NormalItem>
}

interface NormalItem {
  id: string
  label: string
  accelerator?: string
  type: 'normal'
  enabled: boolean
}

type AnyMenuItem = CheckboxRadioItem | SeparatorItem | SubmenuItem | NormalItem

interface MenuProvider {
  show: (posX: number, posY: number, items: AnyMenuItem[], callback: (clickedID: string) => void) => Function
}

declare module NodeJS {
  interface Global {
    config: any
    menuProvider: MenuProvider
  }
}