import React from 'react';
import Button from './Button';
import Code from './Code';
import './Main.css';

const Main = () => {
  return (
    <div className='Main'>
      <div className='Main__Wrapper'>
        <div className='Main__Content'>
          <h1 className='Main__Title'>Buttons</h1>
          <div
            className='Main__Row'
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat( 2 ,minmax(230px, 320px))',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginBottom: '45px',
            }}
          >
            <div className='Main__Item'>
              <Code code={'<Button />'} />
              <Button />
            </div>
            <div className='Main__Item'>
              <Code code={'&:hover, &:focus'} color={'#828282'} />
              <Button />
            </div>
          </div>
          <div
            className='Main__Row'
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat( 2 ,minmax(230px, 320px))',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginBottom: '45px',
            }}
          >
            <div className='Main__Item'>
              <Code code={'<Button variant=”outline” />'} />
              <Button variant='outline' />
            </div>
            <div className='Main__Item'>
              <Code code={'&:hover, &:focus'} color={'#828282'} />
              <Button variant='outline' />
            </div>
          </div>
          <div
            className='Main__Row'
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat( 2 ,minmax(230px, 320px))',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginBottom: '45px',
            }}
          >
            <div className='Main__Item'>
              <Code code={'<Button variant=”text” />'} />
              <Button variant='text' />
            </div>
            <div className='Main__Item'>
              <Code code={'&:hover, &:focus'} color={'#828282'} />
              <Button variant='text' />
            </div>
          </div>
          <div
            className='Main__Row'
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat( 2 ,minmax(230px, 320px))',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginBottom: '45px',
            }}
          >
            <div className='Main__Item'>
              <Code code={'<Button disableShadow color=”primary”/>'} />
              <Button disableShadow color='primary' />
            </div>
          </div>
          <div
            className='Main__Row'
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat( 2 ,minmax(230px, 320px))',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginBottom: '45px',
            }}
          >
            <div className='Main__Item'>
              <Code code={'<Button disabled />'} />
              <Button disabled />
            </div>
            <div className='Main__Item'>
              <Code code={'<Button variant=”text” disabled />'} />
              <Button variant='text' disabled />
            </div>
          </div>
          <div
            className='Main__Row'
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat( 2 ,minmax(230px, 320px))',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginBottom: '45px',
            }}
          >
            <div className='Main__Item'>
              <Code code={'<Button startIcon=”local_grocery_store” />'} />
              <Button startIcon='add_shopping_cart' color='primary' />
            </div>
            <div className='Main__Item'>
              <Code code={'<Button endIcon=”local_grocery_store” />'} />
              <Button endIcon='add_shopping_cart' color='primary' />
            </div>
          </div>
          <div
            className='Main__Row'
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat( 3 ,minmax(230px, 320px))',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginBottom: '45px',
            }}
          >
            <div className='Main__Item'>
              <Code code={'<Button size=”sm” />'} />
              <Button size='sm' color='primary' />
            </div>
            <div className='Main__Item'>
              <Code code={'<Button size=”md” />'} />
              <Button size='md' color='primary' />
            </div>
            <div className='Main__Item'>
              <Code code={'<Button size=”lg” />'} />
              <Button size='lg' color='primary' />
            </div>
          </div>
          <div
            className='Main__Row'
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat( 4 ,minmax(230px, 250px))',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginBottom: '45px',
            }}
          >
            <div className='Main__Item'>
              <Code code={'<Button color=”default” />'} />
              <Button color='default' />
            </div>
            <div className='Main__Item'>
              <Code code={'<Button color=”primary” />'} />
              <Button color='primary' />
            </div>
            <div className='Main__Item'>
              <Code code={'<Button color=”secondary” />'} />
              <Button color='secondary' />
            </div>
            <div className='Main__Item'>
              <Code code={'<Button color=”danger” />'} />
              <Button color='danger' />
            </div>
          </div>
          <div
            className='Main__Row'
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat( 4 ,minmax(230px, 250px))',
              justifyContent: 'flex-start',
              alignItems: 'flex-end',
              paddingBottom: '45px',
            }}
          >
            <div className='Main__Item'>
              <Code code={'&:hover, &:focus'} />
              <Button color='default' />
            </div>
            <div className='Main__Item'>
              <Button color='primary' />
            </div>
            <div className='Main__Item'>
              <Button color='secondary' />
            </div>
            <div className='Main__Item'>
              <Button color='danger' />
            </div>
          </div>
          <a
            href='https://material.io/resources/icons/?style=round'
            target='_blank'
            style={{
              color: '#828282',
              marginBottom: '10px',
              display: 'inline-block',
              fontSize: '12px',
              textDecoration: 'none',
            }}
          >
            Icons: https://material.io/resources/icons/?style=round
          </a>
          <footer
            style={{ color: '#A9A9A9', padding: '24px 0', fontSize: '14px' }}
          >
            created by Jonathan Ruiz Silva - devChallenges.io
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Main;
