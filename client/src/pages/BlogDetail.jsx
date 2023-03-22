import React from 'react'
import DetailHeader from '../layouts/DetailHeader'
import Footer from '../layouts/Footer'

const BlogDetail = () => {
  return (
    <div>
      <DetailHeader />
      <div className='main-container'>
        <div>
          <h2 className='mt-5'>Titulo de la publicacion</h2>
          <img className='w-100 object-fit-cover mt-5' src={require('../assets/images/detail-example.jpg')} />
          <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec felis volutpat, rutrum justo vitae, 
          sagittis risus. Donec ullamcorper convallis mollis. Vivamus bibendum tellus at laoreet posuere. Etiam ornare 
          nisl maximus, maximus odio porta, ornare ligula. Proin quis sem mi. Proin accumsan est est. Donec venenatis orci 
          quis neque tempor, ut vulputate diam convallis. Aliquam eget pharetra nulla. In volutpat magna mauris, et suscipit 
          velit tristique a. Praesent a faucibus justo. Fusce in pharetra ante, pellentesque interdum eros. Cras auctor 
          eget lorem ac tincidunt. Suspendisse ut lectus et nulla vehicula lacinia. Ut blandit mollis elementum. Quisque in 
          turpis volutpat, semper justo sed, mattis elit. Sed leo enim, scelerisque in rutrum sit amet, facilisis a arcu. 
          Praesent pellentesque condimentum lorem, a scelerisque lacus facilisis non. In eu est non tortor convallis euismod. 
          Proin varius at purus id tincidunt. Nulla molestie rhoncus felis non pellentesque. Nunc sit amet aliquam ipsum, ut 
          maximus ex. Ut molestie neque ex, eget fringilla erat aliquam a. Duis tempor leo sit amet interdum ultrices. Sed 
          tincidunt fringilla dui id ornare. Nullam ut lacus non ex porttitor semper vel vel mauris. Aliquam sed enim enim.
          Nam tempus lectus sit amet eros pharetra varius. Vivamus sit amet dolor felis. In quis molestie lacus. Nulla eleifend 
          nulla quis odio dapibus, sit amet facilisis massa elementum. Cras interdum et elit quis dapibus. Suspendisse ut 
          faucibus magna, vitae convallis lorem. Suspendisse rutrum sit amet massa vitae congue. Nullam sagittis congue 
          hendrerit. Phasellus vestibulum sodales urna, blandit dictum nisl tincidunt a. Quisque mollis metus quis laoreet 
          pharetra. Quisque congue magna cursus ligula congue porta. Sed congue leo quis consectetur cursus. Vestibulum pharetra, 
          ante sit amet bibendum laoreet, sem turpis fringilla ligula, sit amet scelerisque sapien tellus sit amet quam. Nullam 
          erat sapien, semper in facilisis sed, varius at mauris. Phasellus nec ante eget augue porta volutpat. Cras id leo 
          sed nisi dictum accumsan. Sed semper blandit ligula, vitae convallis orci pulvinar quis. Maecenas quis erat at ipsum 
          euismod scelerisque ac in nisl. Integer vitae tempus metus. Duis sollicitudin ligula facilisis nibh pellentesque, 
          non eleifend tellus venenatis. Suspendisse potenti. Proin non sem magna. Cras feugiat tortor id justo feugiat, 
          non porta enim accumsan. Vestibulum id nibh eu eros imperdiet aliquet et ut purus. In non nulla tincidunt massa 
          auctor viverra. Sed sagittis magna vel erat convallis rhoncus. Class aptent taciti sociosqu ad litora torquent per 
          conubia nostra, per inceptos himenaeos. Pellentesque ut imperdiet quam, vel egestas ante. Fusce commodo tincidunt 
          cursus. Nunc nunc ipsum, semper eget scelerisque at, suscipit nec sapien. Donec quam quam, ornare in nisi a, viverra 
          fermentum mauris. Etiam quis vehicula metus. Nullam leo sem, auctor non enim at, aliquam rhoncus velit. Quisque ac 
          massa sit amet justo rutrum congue. Curabitur tellus arcu, dignissim et ipsum ut, volutpat mattis dui. Mauris sit 
          amet arcu purus. Quisque at iaculis diam. Vestibulum sodales ex nec sagittis aliquam.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default BlogDetail
