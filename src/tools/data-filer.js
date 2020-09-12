export default function dataFilter(data) {

  const temp =
    data
      .filter(item => {
        return item.population >= 50000
      })
      .sort((a, b) => {
        if (Number(a.population) > Number(b.population))
          return -1
        if (Number(a.population) < Number(b.population))
          return 1
        return 0
      })

  let max = temp[0]
  
  let sortByNameAndCutMost =
      temp
        .slice(1)
        .sort((a, b) => {
          if (a.city.toLowerCase() < b.city.toLowerCase())
            return -1
          if (a.city.toLowerCase() > b.city.toLowerCase())
            return 1
          return 0
        })

  return [max, ...sortByNameAndCutMost]
}