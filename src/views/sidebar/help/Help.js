import React from 'react';
import './Help.css'
import { Card } from 'antd';

const Help = (props) => {

  return (
    <div className='help'>
      <h2 className='help-title'>Help</h2>
      <Card className='help-card'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lectus nisi, vulputate nec est in, aliquam porta neque. Praesent id nibh massa. Fusce ac lorem tincidunt, dignissim tellus eu, sodales neque. Etiam quis condimentum augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ultricies nulla ac massa viverra tincidunt. Pellentesque nec accumsan magna. Nunc ac ex feugiat, eleifend augue in, malesuada magna. Nullam imperdiet tempus nisl vitae tincidunt. Quisque rutrum nisi nec fermentum fringilla. Suspendisse potenti. Praesent id risus ligula. Donec accumsan enim nunc, a varius tortor facilisis quis. Maecenas ac eros non sem pharetra aliquam. Vestibulum consequat malesuada posuere. Fusce vel nisi vitae neque mollis scelerisque quis a risus</p>

        <p>Praesent dictum tempor ligula, eu finibus est ultrices varius. Nulla condimentum tortor a leo lacinia imperdiet. Aliquam erat volutpat. In pulvinar tincidunt diam a maximus. Cras nec tortor porttitor, luctus tellus eget, pretium sem. Nunc dignissim nulla vitae nulla condimentum fermentum. Cras ut odio vel dui suscipit suscipit. Curabitur sodales nisi ac rutrum laoreet.</p>

        <p>Ut orci mauris, pellentesque et sagittis in, convallis efficitur leo. Curabitur pharetra tellus nec turpis tincidunt pretium. Aliquam pulvinar dignissim velit, eu ullamcorper metus pharetra ut. Integer varius metus ac urna ultricies, quis consectetur libero iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus elementum iaculis nisl sed euismod. Ut in tristique nisl, eget imperdiet sem. Nunc a ligula dui. Mauris quis ligula eu metus suscipit pulvinar eu eget ante. Donec porttitor ullamcorper interdum. Morbi tincidunt, lectus quis ultrices porttitor, neque ipsum consequat massa, vitae pretium erat diam eget purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
      </Card>
    </div>
  )
}

export default Help;