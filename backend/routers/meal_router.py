import os
from datetime import datetime, timedelta

from dotenv import load_dotenv
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import meal_crud
from database.database import get_db
from schemes.meal_scheme import NewDate, SuccessScheme, ErrorScheme, SuccessDayCountScheme, ResponseScheme

load_dotenv()

app = APIRouter(
    prefix='/meal',
    tags=['meal'],
)


@app.get('/list')
async def get_all_meal(db: Session = Depends(get_db)) -> ResponseScheme:
    try:
        data = meal_crud.get_all_meal(db)
        return SuccessDayCountScheme(
            data=data,
            day_count=len(data)
        )
    except Exception as e:
        return ErrorScheme(
            message=str(e)
        )


@app.get('/')
async def get_meal(date: str, db: Session = Depends(get_db)) -> ResponseScheme:
    try:
        data = meal_crud.get_meal_by_date(date, db)

        return SuccessScheme(
            data=data
        )
    except Exception as e:
        return ErrorScheme(
            message=str(e)
        )


@app.get('/today')
async def get_today_meal(db: Session = Depends(get_db)):
    try:
        today = datetime.now().strftime('%Y-%m-%d')
        data = meal_crud.get_meal_by_date(today, db)

        return SuccessScheme(
            success=True,
            data=data
        )
    except Exception as e:
        return ErrorScheme(
            message=str(e)
        )


@app.get('/week')
async def get_lunch_week(db: Session = Depends(get_db)) -> ResponseScheme:
    try:
        today = datetime.now()

        weekday = today.weekday()

        monday = today - timedelta(days=weekday)
        sunday = monday + timedelta(days=6)

        monday_str = monday.strftime('%Y-%m-%d')
        sunday_str = sunday.strftime('%Y-%m-%d')

        data = meal_crud.get_meal_by_date_range(monday_str, sunday_str, db)
        return SuccessDayCountScheme(
            data=data,
            day_count=len(data)
        )
    except Exception as e:
        return ErrorScheme(
            message=str(e)
        )


@app.get('/period')
async def get_meal_range(date_from: str, date_to: str, db: Session = Depends(get_db)) -> ResponseScheme:
    try:
        data = meal_crud.get_meal_by_date_range(date_from, date_to, db)
        return SuccessScheme(
            data=data
        )
    except Exception as e:
        return ErrorScheme(
            message=str(e)
        )


@app.get('/limit')
async def get_meal_period(date_from: str, limit: int, db: Session = Depends(get_db)) -> ResponseScheme:
    try:
        data = meal_crud.get_meal_by_date_limit(date_from, limit, db)

        return SuccessDayCountScheme(
            data=data,
            day_count=len(data)
        )
    except Exception as e:
        return ErrorScheme(
            message=str(e)
        )


@app.post('/')
async def insert_meal(new_meal: NewDate, key: str, db: Session = Depends(get_db)):
    if key != os.environ.get('KEY'):
        raise HTTPException(status_code=401, detail='Unauthorized')
    else:
        try:
            return {'success': True, 'data': meal_crud.insert_meal(new_meal, db)}
        except Exception as e:
            return {'success': False, 'message': str(e)}


@app.put('/')
async def update_meal(new_meal: NewDate, key: str, db: Session = Depends(get_db)):
    if key != os.environ.get('KEY'):
        raise HTTPException(status_code=401, detail='Unauthorized')
    else:
        data = meal_crud.get_meal_by_date(new_meal.date, db)

        try:
            return SuccessScheme(
                data=data
            )
        except Exception as e:
            return ErrorScheme(
                message=str(e)
            )


@app.delete('/')
async def delete_meal(date: str, key: str, db: Session = Depends(get_db)):
    if key != os.environ.get('KEY'):
        raise HTTPException(status_code=401, detail='Unauthorized')
    else:
        try:
            return {'success': True, 'data': meal_crud.delete_meal_by_date(date, db)}
        except Exception as e:
            return {'success': False, 'message': str(e)}
