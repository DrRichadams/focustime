import React, { useState, useEffect } from 'react';
import {Text, View, StyleSheet } from 'react-native';

import { fontSizes, spacing } from '../utils/Sizes';
import { colors } from '../utils/colors';

const minutesToMillis = (min) => min * 1000 * 60

export const Countdown = ({
  minutes = 20,
  isPaused,
  onProgress,
  onEnd
}) => {

  const interval = React.useRef(null)

  const countDown = () => {
    setMillis((time) => {
      if(time === 0){
        clearInterval(interval.current)
        onEnd()
        return time
      }
      const timeLeft = time - 1000
          onProgress(timeLeft / minutesToMillis(minutes))
      return timeLeft
    })
  }

  useEffect(() => {
    if(isPaused){
      if(interval.current) clearInterval(interval.current)
      return
    }
      interval.current = setInterval(countDown, 1000)

      return () => clearInterval(interval.current)
  }, [isPaused])

  useEffect(()=>{
      setMillis(minutesToMillis(minutes))
  }, [minutes])

  const [millis, setMillis] = useState(minutesToMillis(minutes));

  const minute = Math.floor(millis / 1000 / 60) % 60
  const second = Math.floor(millis / 1000) % 60

  const formatTime = (time) => time < 10 ? `0${time}` : time

  return(
    <Text style={styles.text}>{formatTime(minute)} : {formatTime(second)}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxl,
    fontWeight: 'bold',
    color: colors.white,
    padding: spacing.lg,
    backgroundColor: 'rgba(94, 132, 229, 0.3'
  }
})