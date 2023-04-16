import { defineStore } from 'pinia'

export const useStore = defineStore('myStore', {
  state: () => {
    return {
      money: 50,
      food: 50,
      currentLevel: 1,
      level: 0,
      clicks: 0
    }
  },
  actions: {
    setMoney(value) {
      this.money = value
    },
    setFood(value) {
      this.food = value
    },
    setCurrentLevel(value) {
      this.currentLevel = value
    },
    setLevel(value) {
      this.level = value
    },
    setClicks(value) {
      this.clicks = value
    },

    reset() {
      money = 50 + level*100,
      food = 50 + level*100,
      currentLevel = 1,
      level = 0,
      clicks = 0
    }
  },
  persist: {
    money: localStorage,
    food: localStorage,
    curentLevel: localStorage,
    level: localStorage,
    clicks: localStorage
  }
})