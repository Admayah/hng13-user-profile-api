import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { catchError, map, Observable } from 'rxjs';


@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) { }

  getCatFacts(): Observable<string> {
    return this.httpService.get('https://catfact.ninja/fact').
    pipe(map((response) => response.data.fact), 
    catchError((error) => { throw new HttpException('Failed to fetch cat fact', HttpStatus.BAD_GATEWAY) }));
  }
}
