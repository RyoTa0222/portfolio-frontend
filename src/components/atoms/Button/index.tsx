import { useMemo, memo, ReactElement, JSXElementConstructor } from 'react'
import { Button, ButtonProps, useColorModeValue } from '@chakra-ui/react'
import throttle from '@/utils/throttle'
import { ButtonVariant, ButtonScheme } from './type'
export interface Props extends ButtonProps {
  /**
   * アイコン
   */
  icon?: ReactElement<any, string | JSXElementConstructor<any>>
  /**
   * スキーマ
   */
  scheme?: ButtonScheme
  /**
   * タイプ
   */
  variant?: ButtonVariant
  /**
   * trueなら角丸
   */
  round?: boolean
  /**
   * 処理中のフラグ
   */
  processing: boolean
  /**
   * クリックイベントの処理
   */
  onClick: (args?: unknown) => void
}

export const Btn: React.FC<Props> = memo(
  ({ icon, scheme, variant, round, onClick, processing, children }) => {
    const hoverBgOutlineDanger = useColorModeValue('red.50', 'red.900')
    const hoverBgNotDanger = useColorModeValue('app-gray.100', 'app-gray.800')
    const hoverBgPrimary = useColorModeValue('app-gray.600', 'app-gray.800')
    const hoverBgOutlinePrimary = useColorModeValue(
      'app-gray.100',
      'app-gray.600',
    )
    const _variant = useMemo(() => {
      if (variant) {
        return variant === 'fill' ? 'solid' : 'outline'
      }
      return 'solid'
    }, [variant])
    const _borderRadius = useMemo(() => {
      return round ? 'full' : 'md'
    }, [round])
    const _colorScheme = useMemo(() => {
      switch (scheme) {
        case 'danger':
          return 'red'
        case 'secondary':
          return 'white'
        case 'primary':
        default:
          return 'app-gray'
      }
    }, [scheme])
    const _bgColor = useMemo(() => {
      // scheme: outline
      if (variant === 'outline') {
        return 'transparent'
      }
      // scheme: fill
      if (scheme === 'danger') {
        return 'red.500'
      } else if (scheme === 'secondary') {
        return 'white'
      }
      return 'app-gray.900'
    }, [scheme, variant])
    const _hoverBgColor = useMemo(() => {
      // scheme: outline
      if (variant === 'outline') {
        if (scheme === 'danger') {
          return hoverBgOutlineDanger
        }
        return hoverBgOutlinePrimary
      }
      // scheme: fill
      if (scheme === 'danger') {
        return 'red.600'
      } else if (scheme === 'secondary') {
        return 'app-gray.100'
      }
      return hoverBgPrimary
    }, [
      scheme,
      variant,
      hoverBgOutlineDanger,
      hoverBgNotDanger,
      hoverBgPrimary,
      hoverBgOutlinePrimary,
    ])
    const _textColor = useMemo(() => {
      // scheme: outline
      if (variant === 'outline') {
        if (scheme === 'danger') {
          return 'red.500'
        } else if (scheme === 'secondary') {
          return 'white'
        } else {
          return 'app-gray.900'
        }
      }
      // scheme: fill
      if (scheme === 'secondary') {
        return 'app-gray.900'
      }
      return 'white'
    }, [scheme, variant])
    const _borderWidth = useMemo(() => {
      return variant === 'outline' ? '1px' : 'none'
    }, [variant])
    const _borderColor = useMemo(() => {
      if (scheme === 'danger') {
        return 'red.500'
      } else if (scheme === 'secondary') {
        return 'white'
      }
      return 'app-gray.900'
    }, [scheme])
    return (
      <Button
        onClick={throttle(onClick)}
        leftIcon={icon}
        variant={_variant}
        colorScheme={_colorScheme}
        isLoading={processing}
        bg={_bgColor}
        color={_textColor}
        borderWidth={_borderWidth}
        borderRadius={_borderRadius}
        borderColor={_borderColor}
        _hover={{ bg: _hoverBgColor }}
      >
        {children}
      </Button>
    )
  },
)
