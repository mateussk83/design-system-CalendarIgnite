import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@mateus-ignite-ui/react'

const meta: Meta<TextProps> = {
  title: 'Form/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis sunt ipsum tempora animi laborum quam tempore doloremque neque possimus commodi vel veniam rerum saepe dolores, inventore quaerat earum sequi libero!',
  },
}

export default meta

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
