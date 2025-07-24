from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from .forms import RegisterForm, LoginForm

def register_view(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            print('registered successfully')
            return redirect('home')  # Home sahifangiz nomi
    else:
        form = RegisterForm()
    return render(request, 'register.html', {'form': form})

def login_view(request):
    if request.method == 'POST':
        form = LoginForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            print('login success')
            return redirect('home')
    else:
        form = LoginForm()
        print('login xatolik')
    return render(request, 'login.html', {'form': form})

def logout_view(request):
    logout(request)
    return redirect('login')
