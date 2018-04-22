import {
  Component,
  Method,
  Element,
  Prop,
  State,
  Event,
  EventEmitter
} from '@stencil/core';


@Component({
    tag: 'my-modal',
    styleUrl: 'my-modal.css'
})

export class MyModal {

  buttons = ['Cancel'];

  @Element() modalEl: HTMLElement;

  @Prop() title: string;
  @Prop() content: string;

  @State() showOptions = false;

  @Event() onClose: EventEmitter;


   @Method()

   open(){
     this.modalEl.style.display = 'block';

   }

   closeModalHandler = () => {
     //this.modalEl.style.display = 'none';
     this.showOptions = false;
     this.onClose.emit();
   };

   showOptionsHandler = () =>{
     this.showOptions = true;
   };




    render(){

      let options = null;
      if(this.showOptions){
        options = (
          this.buttons.map(btn => (
          <button onClick={this.closeModalHandler}>{btn}</button>
        )));
      }

        return (
          <div>
            <h1>{this.title}</h1>
            <p>{this.content}</p>

            <hr/>
            <button onClick={this.showOptionsHandler}>Show options</button>
            <hr/>
            {options}


          </div>
        )
    }
}
