import { Clothes } from './expense/_clothes'
import { Education } from './expense/_education'
import { Expense } from './expense/_expense'
import { Food } from './expense/_food'
import { Fun } from './expense/_fun'
import { Grocery } from './expense/_grocery'
import { Home } from './expense/_home'
import { Transport } from './expense/_transport'
import { Travel } from './expense/_travel'
import { Income } from './income/_income'

export const iconsMap = {
  INCOME: {
    default: Income,
  },
  EXPENSE: {
    default: Expense,
    food: Food,
    fun: Fun,
    grocery: Grocery,
    home: Home,
    education: Education,
    clothes: Clothes,
    transport: Transport,
    travel: Travel,
  },
}
