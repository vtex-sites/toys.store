import { useSearch } from '@faststore/sdk'
import React from 'react'
import Select from 'src/components/ui/Select'

const OptionsMap = {
  price_desc: 'Preço, decrescente',
  price_asc: 'Preço, ascendente',
  orders_desc: 'Mais vendidos',
  name_asc: 'A-Z',
  name_desc: 'Z-A',
  release_desc: 'Data de lançamento',
  discount_desc: 'Descontos',
  score_desc: 'Relevancia',
}

const keys = Object.keys(OptionsMap) as Array<keyof typeof OptionsMap>

function Sort() {
  const {
    setSort,
    state: { sort },
  } = useSearch()

  return (
    <Select
      id="sort-select"
      className="sort / title-small"
      labelText="Ordenar por:"
      options={OptionsMap}
      onChange={(e) => setSort(keys[e.target.selectedIndex])}
      value={sort}
      testId="search-sort"
    />
  )
}

export default Sort
