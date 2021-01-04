import { Menu, Icon } from 'antd'
import { useRouter } from 'next/router'
import Link from 'next/link'

const keys = ['/', '/users', '/charts']

const menu = [
  <Menu.Item key={keys[0]}>
    <Link href={keys[0]}>
      <a>
        <Icon type="dashboard" />
        <span>Dashboard</span>
      </a>
    </Link>
  </Menu.Item>,
  <Menu.Item key={keys[1]}>
    <Link href={keys[1]}>
      <a>
        <Icon type="team" />
        <span>Users</span>
      </a>
    </Link>
  </Menu.Item>,
  <Menu.Item key={keys[2]}>
  <Link href={keys[2]}>
    <a>
      <Icon type="history" />
      <span>Charts</span>
    </a>
  </Link>
</Menu.Item>
]

const MenuLayout = ({ style, closeDrawer }) => {
  const router = useRouter()
  const currentPath = router.route
  let selectedKeys = []

  for (let i = keys.length - 1; i >= 0; i--) {
    if (currentPath.includes(keys[i])) {
      selectedKeys = [keys[i]]
      break
    }
  }

  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={selectedKeys}
      style={{ ...style, padding: '16px 0' }}
      onClick={({ key }) => {
        closeDrawer()
        router.push(key)
      }}
    >
      {menu}
    </Menu>
  )
}

export default MenuLayout