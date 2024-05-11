import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    standalone: true,
    name: 'salaryPerDay'
})
export class SalaryPipe implements PipeTransform{
    transform(salary: number, ...args: any[]) {
        return salary/30;
    }

}