import { memo, useMemo, useState } from 'react'
import { Box, useColorModeValue, Text, Flex, Collapse } from '@chakra-ui/react'
import throttle from 'just-throttle'
import { SvgIcon } from '@/components/atoms/SvgIcon'
import { RoadmapType } from '@/types/interface'

export interface Props {
  /**
   * ロードマップのタイプ
   */
  roadmapType: RoadmapType
}

export interface RoadmapItemProps {
  /**
   * ロードマップのタイプ
   */
  type: RoadmapType
  /**
   * trueの場合選択中
   */
  selected: boolean
}

const RoadmapItem = ({ type, selected }: RoadmapItemProps) => {
  const iconColor = useColorModeValue('#B9B9B9', '#DADADA')
  const toggleColor = useMemo(() => {
    if (selected) {
      return '#1DAEFF'
    } else {
      return iconColor
    }
  }, [selected])
  return (
    <Flex flexFlow="column" alignItems="center" cursor="pointer">
      <SvgIcon name={type} color={toggleColor} />
      <Collapse in={selected} animateOpacity>
        <Text color={toggleColor} fontWeight="bold" fontSize="xs">
          {type === 'schedule' && '未実装'}
          {type === 'develop' && '開発中'}
          {type === 'merge' && '実装済'}
        </Text>
      </Collapse>
    </Flex>
  )
}

export const RoadmapMenu = memo(({ roadmapType }: Props) => {
  const [rType, setRType] = useState(roadmapType)
  const bg = useColorModeValue('#FBFBFB', '#404040')
  const shadow = useColorModeValue(
    '4px 4px 12px rgba(0, 0, 0, 0.04), -4px -4px 10px 4px #FFFFFF',
    '4px 4px 12px #171717, -4px -4px 10px 4px #494949',
  )
  const handleClick = throttle(
    (type: RoadmapType) => {
      setRType(type)
    },
    2000,
    { trailing: false },
  )

  return (
    <Box
      display="inline-flex"
      height="224px"
      boxSizing="border-box"
      pt="32px"
      px="48px"
      boxShadow={shadow}
      borderRadius="60px"
      maxWidth="400px"
      width="90vw"
      justifyContent="space-between"
      bg={bg}
    >
      {/* schedule */}
      <Box onClick={() => handleClick('schedule')}>
        <RoadmapItem type="schedule" selected={roadmapType === 'schedule'} />
      </Box>
      {/* develop */}
      <Box onClick={() => handleClick('develop')}>
        <RoadmapItem type="develop" selected={roadmapType === 'develop'} />
      </Box>
      {/* merge */}
      <Box onClick={() => handleClick('merge')}>
        <RoadmapItem type="merge" selected={roadmapType === 'merge'} />
      </Box>
    </Box>
  )
})

RoadmapMenu.displayName = 'RoadmapMenu'
