import {MenuItem} from './MenuItem'
import {MenuInnerWithSub} from './MenuInnerWithSub'
import MegaMenu from './MegaMenu'
import {useIntl} from 'react-intl'
import React, {useEffect, useState} from 'react'
import ApiAxios from '../../../../app/modules/auth/core/ApiAxios'

export const MenuInner = () => {
  const intl = useIntl()
  const [getMainCategory, setMainCategory] = useState<any>([])
  const [getSubCategory, setSubCategory] = useState<any>([])
  // const userRole = 0;
  useEffect(() => {
    let adminMain = [
      {
        "id": 51,
        "category_name": "Category",
        "category_description": "Unstoppable Memories",
        "long_description": "",
        "category_image": "public/images/categories/1725816472989--dhoti09.jpeg",
        "image_type": "",
        "category_video": "public/images/categories/1651050012484--category3.jpg",
        "video_type": "",
        "is_addon": 0,
        "is_sub": 0,
        "parent_id": 0,
        "status": "Active",
        "created_on": "2022-04-27T09:42:28.000Z",
        "featured": "",
        "vendor_discount_percent": "50",
        "reseller_descount_percentage": "70",
        "meta_tag_title": "",
        "meta_tag_description": "",
        "meta_tag_keywords": "",
        "created_by": 1,
        "updated_by": 0,
        "createdAt": "2022-04-27T09:43:42.000Z",
        "updatedAt": "2024-09-08T17:28:15.000Z"
    },
    {
      "id": 52,
      "category_name": "Users",
      "category_description": "Unstoppable Memories",
      "long_description": "",
      "category_image": "public/images/categories/1725816472989--dhoti09.jpeg",
      "image_type": "",
      "category_video": "public/images/categories/1651050012484--category3.jpg",
      "video_type": "",
      "is_addon": 0,
      "is_sub": 0,
      "parent_id": 0,
      "status": "Active",
      "created_on": "2022-04-27T09:42:28.000Z",
      "featured": "",
      "vendor_discount_percent": "50",
      "reseller_descount_percentage": "70",
      "meta_tag_title": "",
      "meta_tag_description": "",
      "meta_tag_keywords": "",
      "created_by": 1,
      "updated_by": 0,
      "createdAt": "2022-04-27T09:43:42.000Z",
      "updatedAt": "2024-09-08T17:28:15.000Z"
    },
    {
      "id": 53,
      "category_name": "Products",
      "category_description": "Unstoppable Memories",
      "long_description": "",
      "category_image": "public/images/categories/1725816472989--dhoti09.jpeg",
      "image_type": "",
      "category_video": "public/images/categories/1651050012484--category3.jpg",
      "video_type": "",
      "is_addon": 0,
      "is_sub": 0,
      "parent_id": 0,
      "status": "Active",
      "created_on": "2022-04-27T09:42:28.000Z",
      "featured": "",
      "vendor_discount_percent": "50",
      "reseller_descount_percentage": "70",
      "meta_tag_title": "",
      "meta_tag_description": "",
      "meta_tag_keywords": "",
      "created_by": 1,
      "updated_by": 0,
      "createdAt": "2022-04-27T09:43:42.000Z",
      "updatedAt": "2024-09-08T17:28:15.000Z"
    }
    ]
    let adminSubMain = [
        {
          "id": 55,
          "category_name": "Add Sub Category",
          "category_description": "It is only Begining\r\n",
          "long_description": "\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"",
          "category_image": "public/images/categories/1651297386554--topcollection2.jpg",
          "image_type": "",
          "category_video": "",
          "video_type": "",
          "is_addon": 0,
          "is_sub": 1,
          "parent_id": 51,
          "status": "Active",
          "created_on": "2022-04-30T05:41:03.000Z",
          "featured": "",
          "vendor_discount_percent": "50",
          "reseller_descount_percentage": "70",
          "meta_tag_title": "Add Sub Category",
          "meta_tag_description": "Add Sub Category",
          "meta_tag_keywords": "Add Sub Category",
          "created_by": 1,
          "updated_by": 0,
          "createdAt": "2022-04-30T05:43:06.000Z",
          "updatedAt": "2022-04-30T05:43:06.000Z"
      },
      {
        "id": 56,
        "category_name": "Employees",
        "category_description": "It is only Begining\r\n",
        "long_description": "\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"",
        "category_image": "public/images/categories/1651297386554--topcollection2.jpg",
        "image_type": "",
        "category_video": "",
        "video_type": "",
        "is_addon": 0,
        "is_sub": 1,
        "parent_id": 52,
        "status": "Active",
        "created_on": "2022-04-30T05:41:03.000Z",
        "featured": "",
        "vendor_discount_percent": "50",
        "reseller_descount_percentage": "70",
        "meta_tag_title": "Employees",
        "meta_tag_description": "Employees",
        "meta_tag_keywords": "Employees",
        "created_by": 1,
        "updated_by": 0,
        "createdAt": "2022-04-30T05:43:06.000Z",
        "updatedAt": "2022-04-30T05:43:06.000Z"
    },
    {
      "id": 58,
      "category_name": "Admins",
      "category_description": "It is only Begining\r\n",
      "long_description": "\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"",
      "category_image": "public/images/categories/1651297386554--topcollection2.jpg",
      "image_type": "",
      "category_video": "",
      "video_type": "",
      "is_addon": 0,
      "is_sub": 1,
      "parent_id": 52,
      "status": "Active",
      "created_on": "2022-04-30T05:41:03.000Z",
      "featured": "",
      "vendor_discount_percent": "50",
      "reseller_descount_percentage": "70",
      "meta_tag_title": "Admins",
      "meta_tag_description": "Admins",
      "meta_tag_keywords": "Admins",
      "created_by": 1,
      "updated_by": 0,
      "createdAt": "2022-04-30T05:43:06.000Z",
      "updatedAt": "2022-04-30T05:43:06.000Z"
    },
    {
      "id": 59,
      "category_name": "End Users",
      "category_description": "It is only Begining\r\n",
      "long_description": "\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"",
      "category_image": "public/images/categories/1651297386554--topcollection2.jpg",
      "image_type": "",
      "category_video": "",
      "video_type": "",
      "is_addon": 0,
      "is_sub": 1,
      "parent_id": 52,
      "status": "Active",
      "created_on": "2022-04-30T05:41:03.000Z",
      "featured": "",
      "vendor_discount_percent": "50",
      "reseller_descount_percentage": "70",
      "meta_tag_title": "End Users",
      "meta_tag_description": "End Users",
      "meta_tag_keywords": "End Users",
      "created_by": 1,
      "updated_by": 0,
      "createdAt": "2022-04-30T05:43:06.000Z",
      "updatedAt": "2022-04-30T05:43:06.000Z"
    },
    {
      "id": 60,
      "category_name": "Store Managers",
      "category_description": "It is only Begining\r\n",
      "long_description": "\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"",
      "category_image": "public/images/categories/1651297386554--topcollection2.jpg",
      "image_type": "",
      "category_video": "",
      "video_type": "",
      "is_addon": 0,
      "is_sub": 1,
      "parent_id": 52,
      "status": "Active",
      "created_on": "2022-04-30T05:41:03.000Z",
      "featured": "",
      "vendor_discount_percent": "50",
      "reseller_descount_percentage": "70",
      "meta_tag_title": "Store Managers",
      "meta_tag_description": "Store Managers",
      "meta_tag_keywords": "Store Managers",
      "created_by": 1,
      "updated_by": 0,
      "createdAt": "2022-04-30T05:43:06.000Z",
      "updatedAt": "2022-04-30T05:43:06.000Z"
    },
    {
      "id": 61,
      "category_name": "Employees",
      "category_description": "It is only Begining\r\n",
      "long_description": "\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"",
      "category_image": "public/images/categories/1651297386554--topcollection2.jpg",
      "image_type": "",
      "category_video": "",
      "video_type": "",
      "is_addon": 0,
      "is_sub": 1,
      "parent_id": 52,
      "status": "Active",
      "created_on": "2022-04-30T05:41:03.000Z",
      "featured": "",
      "vendor_discount_percent": "50",
      "reseller_descount_percentage": "70",
      "meta_tag_title": "Employees",
      "meta_tag_description": "Employees",
      "meta_tag_keywords": "Employees",
      "created_by": 1,
      "updated_by": 0,
      "createdAt": "2022-04-30T05:43:06.000Z",
      "updatedAt": "2022-04-30T05:43:06.000Z"
    },
    {
      "id": 62,
      "category_name": "All Products",
      "category_description": "It is only Begining\r\n",
      "long_description": "\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"",
      "category_image": "public/images/categories/1651297386554--topcollection2.jpg",
      "image_type": "",
      "category_video": "",
      "video_type": "",
      "is_addon": 0,
      "is_sub": 1,
      "parent_id": 53,
      "status": "Active",
      "created_on": "2022-04-30T05:41:03.000Z",
      "featured": "",
      "vendor_discount_percent": "50",
      "reseller_descount_percentage": "70",
      "meta_tag_title": "All Products",
      "meta_tag_description": "All Products",
      "meta_tag_keywords": "All Products",
      "created_by": 1,
      "updated_by": 0,
      "createdAt": "2022-04-30T05:43:06.000Z",
      "updatedAt": "2022-04-30T05:43:06.000Z"
    },
    {
      "id": 63,
      "category_name": "Add New product",
      "category_description": "It is only Begining\r\n",
      "long_description": "\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"",
      "category_image": "public/images/categories/1651297386554--topcollection2.jpg",
      "image_type": "",
      "category_video": "",
      "video_type": "",
      "is_addon": 0,
      "is_sub": 1,
      "parent_id": 53,
      "status": "Active",
      "created_on": "2022-04-30T05:41:03.000Z",
      "featured": "",
      "vendor_discount_percent": "50",
      "reseller_descount_percentage": "70",
      "meta_tag_title": "Add New Product",
      "meta_tag_description": "Add New Product",
      "meta_tag_keywords": "Add New Product",
      "created_by": 1,
      "updated_by": 0,
      "createdAt": "2022-04-30T05:43:06.000Z",
      "updatedAt": "2022-04-30T05:43:06.000Z"
  }
    ]
    // if(userRole === 1) {
    //   setMainCategory(adminMain)
    //   setSubCategory(adminSubMain)
    // } else {
      getFunction()
    // }


    // http://74.208.123.31:5001/categories/allcategories
    // http://74.208.123.31:5001/categories/
  }, [])

  const getFunction = () => {
    async function GetCategories() {
      try {
        const Categories = await ApiAxios.get('/categories')
        const subCategories = await ApiAxios.get('/subcategories')
        const MainCategories = Categories.data?.results
        setMainCategory(MainCategories)
        setSubCategory(subCategories?.data?.results)
      } catch (error) {
        console.log(error)
      }
    }
    GetCategories()
  }
  return (
    <>
    {getMainCategory?.length > 0 &&
    <>
      <MenuItem title={intl.formatMessage({id: 'Home'})} to='/home' />
      {/* <MenuItem title='Layout Builder' to='/builder' /> */}
      {getMainCategory?.map((MainCategory: any, i: any) => {
        return (
          <MenuInnerWithSub
            hasArrow={true}
            isMega={true}
            title={MainCategory?.category_name}
            to='/crafted'
            menuPlacement='bottom-start'
            menuTrigger={`{default:'click', lg: 'hover'}`}
            key={i}
          >
            <MegaMenu
              subCategories={getSubCategory?.filter(
                (subc: any) => subc.category === MainCategory.id
              )}
              mainCategory={MainCategory}
            />
          </MenuInnerWithSub>
        )
      })}
      </>
    }
    </>
  )
}
