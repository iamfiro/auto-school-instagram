from typing import Optional, List

from pydantic import BaseModel


class NewMeal(BaseModel):
    meal: str
    code: Optional[str] = None


class MealScheme(BaseModel):
    id: int
    meal: str
    code: Optional[str] = None


class DateScheme(BaseModel):
    id: int
    date: str
    meals: Optional[List[MealScheme]] = None
    existence: bool


class NewDate(BaseModel):
    date: str
    meals: Optional[List[NewMeal]] = None
    existence: bool


class SuccessScheme(BaseModel):
    success: bool = True
    data: DateScheme = None


class SuccessDayCountScheme(BaseModel):
    success: bool = True
    data: List[DateScheme] = None
    day_count: int = None


class ErrorScheme(BaseModel):
    success: bool = False
    message: str = None


ResponseScheme = SuccessScheme | SuccessDayCountScheme | ErrorScheme
