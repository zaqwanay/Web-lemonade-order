let history = {
  previousState: [],
  currentState: {
    lemonJuice: {
      amount: 0,
      max: 8,
      measurement: 'ounces'
    },
    water: {
      amount: 0,
      max: 8,
      measurement: 'ounces'
    },
    sugar: {
      amount: 3,
      max: 12,
      measurement: 'tablespoons'
    },
    ice: {
      amount: 1,
      max: 15,
      measurement: 'cubes'
    }
  }
}
const {lemonJuice, water, sugar, ice} = history.currentState
$('#lemonJuiceValue').html(lemonJuice.amount + ' ' + lemonJuice.measurement)
$('#waterValue').html(water.amount + ' ' + water.measurement)
$('#sugarValue').html(sugar.amount + ' ' + sugar.measurement)
$('#iceValue').html(ice.amount + ' ' + ice.measurement)
