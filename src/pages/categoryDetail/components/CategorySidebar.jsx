import React from 'react'
import RangeInput from '../../../components/Inputs/RangeInput'
import Brand from './Brand'
import { useTranslation } from 'react-i18next'

function CategorySidebar({ filterDetail }) {
  
  const { t } = useTranslation()
  return (
    <div className="w-64 md:flex hidden flex-col gap-y-6">
      <div className="">
        <div className="font-raleway text-base flex justify-between mb-6">
          <p className="font-bold">{t('categoryDetail.price')}</p>
          <p className="text-gray-lightGray">{t('categoryDetail.sbros')}</p>
        </div>
        <div className="font-raleway text-base text-black-topBlack mb-6 gap-4 flex w-full">
          <span className="py-2 flex-1 px-4 bg-white-Default whitespace-nowrap">{filterDetail?.min_price}</span>
          <span className="py-2 flex-1 px-4 bg-white-Default whitespace-nowrap">{filterDetail?.max_price}</span>
        </div>
        <RangeInput />
      </div>
      {filterDetail?.brands?.length > 0 &&
        <Brand
          dataInfo={filterDetail?.brands}
          headTitle={t('categoryDetail.brend')}
          viewMore={t('categoryDetail.loadMore')}
        />
      }
      {filterDetail?.models?.length > 0 &&
        <Brand dataInfo={filterDetail?.models} headTitle={t('categoryDetail.models')} />
      }
      {Object.entries(filterDetail?.characteristics).length > 0 &&
        Object.entries(filterDetail?.characteristics)?.map((chars, index) => {
          const [key, value] = chars;
          return (
            <Brand
              key={index}
              dataInfo={value}
              headTitle={key}
              viewMore={t('categoryDetail.loadMore')}
            />
          )
        }
        )
      }
    </div>
  )
}

export default CategorySidebar
