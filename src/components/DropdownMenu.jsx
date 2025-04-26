import React, {useEffect} from 'react'
import { Dropdown, Button } from 'antd'
import { UserOutlined, DownOutlined } from '@ant-design/icons'
import useDataStore from '../useDataStore'


export default function DropdownMenu() {

    const {data, loading, error, fetchData} = useDataStore()

    useEffect(()=>{
        fetchData()
    },[])

    const items = data?.reverse().map(item => ({
        key: item.id,
        label: item.name,
        icon: <UserOutlined />
    }))

    
  return (
    <div>
      <Dropdown 
        menu={{items}}
        trigger={['click']}
      >
        <Button type="primary">
          Seleccionar Usuario <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  )
}

