import { useColorModeValue } from '@chakra-ui/react'

type UseDesignSystem = () => {
  isDark: boolean
  NO_DATA_COLOR: string
  BLOG_SIDE_MENU_BG: string
}

const useDesignSystem: UseDesignSystem = () => {
  const isDark = useColorModeValue(false, true)
  const NO_DATA_COLOR = useColorModeValue('#999', '#ccc')
  const BLOG_SIDE_MENU_BG = useColorModeValue('#F0F0F0', '#252829')
  return {
    isDark,
    NO_DATA_COLOR,
    BLOG_SIDE_MENU_BG,
  }
}

export default useDesignSystem
