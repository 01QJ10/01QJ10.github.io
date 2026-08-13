---
layout: page
title: Meta-PINN for Fusion Plasma Equilibrium
description: JAX-based forward prediction and inverse parameter inference for the Grad–Shafranov equation.
importance: 1
category: research
---

## Context

The Grad–Shafranov equation describes axisymmetric magnetohydrodynamic equilibrium in fusion plasmas. During my research internship at A*STAR's Institute of High Performance Computing, I investigated whether meta-learning and physics-informed neural networks could solve both forward and inverse versions of this problem.

## My work

- Implemented JAX-based Meta-PINNs that embed the governing equation in the training objective.
- Evaluated forward prediction against analytical solutions.
- Extended the workflow to infer equilibrium parameters from the physical constraints and observations.
- Built reproducible experiments for comparing the two problem settings.

## Results

For forward prediction, the model matched analytical solutions with mean squared error on the order of $10^{-11}$. For inverse parameter inference, it recovered equilibrium parameters with mean squared error on the order of $3 \times 10^{-5}$.

The work is being prepared for journal submission. Code and research artifacts are not yet public.
