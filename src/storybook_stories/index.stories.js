import './stories.css'

export default {
  title: 'Button'
}

export const action = () => '<button class="Action-button" type="button" autofocus="false" disabled="false" form="formID" formaction="" formmethod="post" name="button-name" type="submit" formtarget="_self" value="params_search" aria-hidden="true">Action button</button>'

export const action_hover = () => '<button class="Action-button Action-button-hover" type="button" autofocus="false" disabled="false" form="formID" formaction="" formmethod="post" name="button-name" type="submit" formtarget="_self" value="params_search" aria-hidden="true">Action button</button>'

export const action_active = () => '<button class="Action-button Action-button-active" type="button" autofocus="false" disabled="false" form="formID" formaction="" formmethod="post" name="button-name" type="submit" formtarget="_self" value="params_search" aria-hidden="true">Action button</button>'

export const action_disabled = () => '<button class="Action-button Action-button-disabled" type="button" autofocus="false" disabled="false" form="formID" formaction="" formmethod="post" name="button-name" type="submit" formtarget="_self" value="params_search" aria-hidden="true" disabled="true">Action button</button>'