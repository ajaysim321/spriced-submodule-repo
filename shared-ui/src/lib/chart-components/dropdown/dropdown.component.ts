import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-dropdown',
  imports: [FormsModule,ReactiveFormsModule,CommonModule,MatFormFieldModule,MatSelectModule,MatInputModule, IonicModule ],
  standalone: true,
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  @Input() dropdownData: any[] = [];

  ngOnInit() {
    console.log(this.dropdownData)
    // Add options dynamically to each dropdown if required
    this.dropdownData = this.dropdownData?.map((item) => ({
      ...item,
      options: this.getOptions(item.label),
    }));
  }

  // Sample function to generate options based on label
  getOptions(label: string): string[] {
    if (label === 'HHP') return ['Option 1', 'Option 2', 'Option 3'];
    if (label === 'Customer') return ['Customer A', 'Customer B', 'Customer C'];
    if (label === 'Engine') return ['Engine X', 'Engine Y', 'Engine Z'];
    return ['Default Option'];
  }
}
