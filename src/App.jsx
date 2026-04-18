import { useState } from 'react'
import { CreditCard, ChartColumnDecreasing, ArrowUpRight, ArrowDownRight, ArrowDownLeft, ShoppingCart, BadgeDollarSign, Coffee, House, Wallet, UserRound, History   } from 'lucide-react';
import './App.css'

export default function App() {
  return (
    <>
      <header>
        <p>
          Bom dia
          <br /><h1>Nome</h1>
        </p> 
      </header>
      
      <section id="section1">
        <div className="quadrado"> 
          <p id='saldo'>Saldo Total</p>
          <p id='real'>R$10,000.00</p>
          <p id='numero'>.... .... .... XXXX</p>
    
        </div>
      </section>

      <section id='section2'>
        <div className='quadrados'>
          <div className="quadradinho1"> 
            
            <div className="circulo1"><ArrowUpRight /></div>
            <p id='enviado'>Enviado</p>
          </div>
          <div className='quadradinho2'>
            <div className='circulo2'><ArrowDownLeft /> </div>
            <p id='enviado'>Recebido</p>
          </div>
          <div className='quadradinho3'>
            <div className='circulo3'> <CreditCard /> </div>
            <p id='enviado'>Cartóes</p>
          </div>
          <div className='quadradinho4'>
            <div className='circulo4'><ChartColumnDecreasing /></div>
            <p id='enviado'>Investir</p>
          </div>
        </div>
          
        <section id='section3'>
          <h1>Transações Recentes</h1>

          <div className='area1'>
            <div className="bloco-transacao">
              <div className="icone-pequeno"><ShoppingCart /></div>
              <div className="texto-meio">
                <p className="titulo-transacao">Compra Amazon</p>
                <p className="data-transacao">Hoje, 14:30</p>
              </div>
              <div className="valor-transacao negativo">-R$89,99</div>
            </div>
          </div>

          <div className='area2'>
            <div className="bloco-transacao">
              <div className="icone-pequeno"><BadgeDollarSign /></div>
              <div className="texto-meio">
                <p className="titulo-transacao">Depósito de Salário</p>
                <p className="data-transacao">Ontem, 09:00</p>
              </div>
              <div className="valor-transacao positivo">+R$3.200,00</div>
            </div>
          </div>

          <div className='area3'>
            <div className="bloco-transacao">
              <div className="icone-pequeno"><Coffee /></div>
              <div className="texto-meio">
                <p className="titulo-transacao">Cafeteria</p>
                <p className="data-transacao">Ontem, 08:20</p>
              </div>
              <div className="valor-transacao negativo">-R$12,50</div>
            </div>
          </div>
        </section>
      
      <div className='botao-circulo'>
        +
      </div>
      
      <div className='linha1'></div>
      <div className='linha2'></div>
      <div className='linha3'></div>
      </section>

      <footer>
        <div className='casinha'>
        <House />
        <p id='casa'>Início</p>
        </div>
        <div className='carteira'>
        <Wallet />
        <p id='casa'>Carteira</p>
        </div>
        <div className='historico'>
        <History />
        <p id='casa'>Histórico</p>
        </div>
        <div className='pessoa'>
          <UserRound />
          <p id='casa'>Perfil</p>
        </div>
      </footer>
    </>
  )
}
